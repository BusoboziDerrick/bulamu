import React from 'react';
import './Panel.css';

/*function bulamu() {
  return (
    <div className="bulamu">
      <header className = "cover">
            <p className = "large">Bulamu More</p>
      </header>
    </div>
  );
}*/

class Panel extends React.Component{
   constructor(props) {
     super(props);
     this.state = {
     searchVisible: false
     }
     }
     // toggle visibility when run on the state
     showSearch() {
     this.setState({
   searchVisible: !this.state.searchVisible
     })
     }
    render() {
     // Classes to add to the <input /> element
     let searchInputClasses = ["searchInput"];
    // Update the class array if the state is visible
     if (this.state.searchVisible) {
     searchInputClasses.push("active");
     }
        return(
            <div className = "Panel">
                <div className = "header">
                  <div className = "fa fa-list fa-1x"></div>
                
                <span className = "title">{this.props.title}</span>
                <span onClick={this.showSearch.bind(this)} className = "fa fa-search fa-1.5x"></span>
                <input type ="text" className = {searchInputClasses.join('')} placeholder="Search..."/>
                </div>
            </div>
        );
    }
}


export default Panel;
