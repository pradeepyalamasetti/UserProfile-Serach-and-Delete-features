import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Anusha shaw',
    role: 'Full Stack Developer',
  },
  {
    uniqueNo: 6,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Bhargav PII',
    role: 'devops engineer',
  },
  {
    uniqueNo: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Pradeep Setti',
    role: 'Full Stack Developer',
  },
  {
    uniqueNo: 8,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Lavanya   ',
    role: 'Fronted Developer',
  },
  {
    uniqueNo: 9,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Linger',
    role: 'Backend Developer',
  },
  {
    uniqueNo: 10,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Gow ',
    role: 'Backend Developer',
  },
]

class App extends Component {
  state = {
    searchInputname: '',
    userDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    // console.log(event.target.value)
    this.setState({searchInputname: event.target.value})
  }

  onDeleteUser = uniqueNo => {
    const {userDetailsList} = this.state
    const filtereUserData = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({userDetailsList: filtereUserData})
  }

  render() {
    const {searchInputname, userDetailsList} = this.state
    console.log(searchInputname)
    const searchResults = userDetailsList.filter(
      eachUser =>
        eachUser.name.toLowerCase().includes(searchInputname.toLowerCase()),
      //   eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
      //   eachUser.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInputname}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              onDeleteUser={this.onDeleteUser}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
