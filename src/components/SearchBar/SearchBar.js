import React from 'react';
import './SearchBar.css'


const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component{
  //Constructor to set the Key's needed to change the Search Bar
  constructor(props){
    super(props)
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    }
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  //This is to make React do something when they select a filter
  getSortByClass(sortByOption){
    if (this.state.sortBy === sortByOption){
      return 'active'
    } else {
      return ''
    }
  };

  handleSortByChange(sortByOption){
    this.setState({
      sortBy: sortByOption
    });
  };

  handleTermChange(event){
    this.setState({
      term:  event.target.value
    });
  }

  handleLocationChange(event){
    this.setState({
        location: event.target.value
    });
  }

  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  renderSortByOptions(){
   return Object.keys(sortByOptions).map(sortByOption => {
     let sortByOptionValue = sortByOptions[sortByOption];
     return <li onClick={this.handleSortByChange.bind(this,sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}> {sortByOption} </li>
   });
 };


  render(){
    return (<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
    <input onChange={this.handleLocationChange} placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a onClick={this.handleSearch}>Lets Go</a>
  </div>
</div>
    )
  };

}
export default SearchBar;

//renderSortByOption explenation:
//Object.keys(sortByOptions) created array ['Best Match','Highest Rated','Most Reviews']
//We then map this array to a new array with .map pass a callback function
//sortByOption is pass each element of the previous array.
//Thefore when we let soryByOptionValue = sortByOptions[sortByOption[]
//We are really making sortByOptionValue = sortByOption[Best Match] which
//This make it equal 'best_match' and continue for each element for the array
// It then returns for teach element in the array.
//The className will conditionally style each sort by option, displaying to the user which
// sorting option is currently selected
