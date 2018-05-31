import React, { Component } from "react";
import { connect } from "react-redux";
import { getCompetitions } from "./action";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow
} from "../../components";

class Competition extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    return this.props.items ? (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Id</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Teams</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.items.map(competition => (
            <TableRow key={competition.id}>
              <TableData>{competition.id}</TableData>
              <TableData>{competition.name}</TableData>
              <TableData>{competition.teams}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ) : (
      <h1>ladero</h1>
    );
  }
}

const mapStateToProps = state => ({
  ...state.items
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(getCompetitions()),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Competition);
