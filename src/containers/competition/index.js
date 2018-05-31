import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCompetitions} from './action';
import {
    Table,
    TableBody,
    TableData,
    TableHead,
    TableHeader,
    TableRow,
  } from './';

class Competition extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>
                            Id
                        </TableHeader>
                        <TableHeader>
                            Name
                        </TableHeader>
                        <TableHeader>
                            Teams
                        </TableHeader>
                    </TableRow>

                </TableHead>
                {pageData => (
                    <TableBody>
                        {pageData.map(item => (
                            <TableRow key={item.id}>
                                <TableData>{item.name}</TableData>
                                <TableData>
                                    {item.teams}
                                </TableData>
                            </TableRow>
                        ))}
                    </TableBody>
                )}
            </Table>
        )
    }
}


const mapStateToProps = state => ({
    ...state.competitions,
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getCompetitions()),
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Competition);