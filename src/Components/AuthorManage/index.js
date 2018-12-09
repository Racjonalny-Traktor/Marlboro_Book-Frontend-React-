import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { AuthorService } from "../../Services";
import "./index.scss";
import environment from "../../environment/environment";
import EditIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Close";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class AuthorManage extends React.Component {
  state = {
    books: [],
    editDialogOpen: false,
    deleteDialogOpen: false,
    selectedBook: null,
    loaded: false
  };

  constructor() {
    super();
    this.submitBook = this.submitBook.bind(this);
  }

  /**
   __v: 0
    _id: "5c0c6c9695ed031044c6555a"
    author: "author xx"
    desc: "test xxx"
    print: "false"
    title: "test"
   */
  async loadData() {
    await AuthorService.getBooks().then(x => {
      return this.setState({
        books: x.data.data,
        loaded: true
      });
    });
  }

  submitBook(event) {
    event.preventDefault();
    // const input = document.getElementById('bookFileName');
    // const data = event.target.value;
    console.log(event);
  }

  componentWillMount() {
    this.loadData();
  }

  editBook(x) {
    this.setState({
      editDialogOpen: true,
      selectedBook: x
    });
  }
  hangleClose = () => {
    this.setState({
      editDialogOpen: false,
      deleteDialogOpen: false
    });
  };

  deleteBook(x) {
    this.setState({
      deleteDialogOpen: true,
      selectedBook: x
    });
  }

  handleTitleChange = ev => {
    this.setState({
      selectedBook: {
        ...this.state.selectedBook,
        title: ev.target.value
      }
    });
  };
  handleDescChange = ev => {
    this.setState({
      selectedBook: {
        ...this.state.selectedBook,
        desc: ev.target.value
      }
    });
  };
  handleAuthorChange = ev => {
    this.setState({
      selectedBook: {
        ...this.state.selectedBook,
        author: ev.target.value
      }
    });
  };

  render() {
    return (
      <div className="author-dashboard">
        <Dialog
          open={this.state.editDialogOpen}
          onClose={this.hangleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Edytuj książkę
              <br />"
              {this.state.selectedBook ? this.state.selectedBook.title : ""}"
            </DialogContentText>
            <TextField
              autoFocus
              label="Nazwa książki"
              fullWidth
              value={this.state.selectedBook && this.state.selectedBook.title}
              onChange={this.handleTitleChange}
            />
            <TextField
              autoFocus
              label="Autorzy książki"
              fullWidth
              value={this.state.selectedBook && this.state.selectedBook.author}
              onChange={this.handleAuthorChange}
            />
            <TextField
              autoFocus
              label="Opis książki"
              fullWidth
              value={this.state.selectedBook && this.state.selectedBook.desc}
              onChange={this.handleDescChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hangleClose} color="primary">
              Anuluj
            </Button>
            <Button
              onClick={async () => {
                if (this.state.selectedBook) {
                  await AuthorService.editBook(this.state.selectedBook);
                  this.hangleClose();
                  this.loadData();
                }
              }}
              color="primary"
            >
              Edytuj
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.deleteDialogOpen}
          onClose={this.hangleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Usuń książkę</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Czy na pewno chcesz usunąć książkę
              <br />"
              {this.state.selectedBook ? this.state.selectedBook.title : ""}"
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.hangleClose} color="primary">
              Anuluj
            </Button>
            <Button
              onClick={async () => {
                if (this.state.selectedBook) {
                  await AuthorService.deleteBook(this.state.selectedBook._id);
                  this.hangleClose();
                  this.loadData();
                }
              }}
              color="primary"
            >
              Usuń
            </Button>
          </DialogActions>
        </Dialog>

        <main>
          <Grid container spacing={24}>
            <Grid item xs={12} md={12}>
              <Paper className="paper">
                <h1>
                  Udostępnione książki <br />
                  <small>Wszystkie podane poniżej są gotowe do czytania</small>
                </h1>
                {this.state.loaded ? (
                  this.state.books && this.state.books.length ? (
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Tytuł książki</TableCell>
                          <TableCell>Author(s)</TableCell>
                          <TableCell>Opis książki</TableCell>
                          <TableCell>Edytuj/Usuń</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {this.state.books.map(x => {
                          return (
                            <TableRow key={x._id}>
                              <TableCell component="th" scope="row">
                                {x.title}
                              </TableCell>
                              <TableCell numeric>{x.author}</TableCell>
                              <TableCell numeric>{x.desc}</TableCell>
                              <TableCell>
                                <Button
                                  color="primary"
                                  onClick={() => this.editBook(x)}
                                >
                                  <EditIcon />
                                </Button>
                                <Button
                                  color="secondary"
                                  onClick={() => this.deleteBook(x)}
                                >
                                  <DeleteIcon />
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  ) : (
                    <p> Nie udostępniasz jeszcze żadnych książek</p>
                  )
                ) : (
                  "..."
                )}
                <br />
                <br />
                <br />
                <br />
                <div>
                  <form
                    action={`${environment.config.apiUrl}/actions/book`}
                    method="post"
                    encType="multipart/form-data"
                  >
                    <input name="title" />
                    <input name="desc" />
                    <input name="author" />
                    <input type="file" name="bookFile" />
                    <button submit="true">Zatwierdź</button>
                  </form>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}
