import React , {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{

    render() {

        console.log('I am rendering details');

        if(!this.props.book) {
            console.log('props book is null');
            return <div>Select a book to get started.</div>;
        }

        return (
            <div> 
              <h3>Details for:</h3>
              <div>Title:{this.props.book.title}</div>
              <div>Pages:{this.props.book.pages}</div>
            </div>
        );
    }
}


function mapStateToProps(state){
    console.log('Mapping State to props in BookDetail..');
    return {
        book:state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);