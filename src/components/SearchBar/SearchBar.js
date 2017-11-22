import React from 'react';
import './SearchBar.css'

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component{
  render(){
    return (<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Lets Go</a>
  </div>
</div>
    )
  }
  //Object.keys(sortByOptions) created array ['Best Match','Highest Rated','Most Reviews']
  //We then map this array to a new array with .map pass a callback function
  //sortByOption is pass each element of the previous array.
  //Thefore when we let soryByOptionValue = sortByOptions[sortByOption[]
  //We are really making sortByOptionValue = sortByOption[Best Match] which
  //This make it equal 'best_match' and continue for each element for the array
 // It then returns for teach element in the array.
  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>
    });
  }
}
export default SearchBar;
