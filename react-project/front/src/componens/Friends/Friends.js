import React from 'react';
import './Friends.css'
class Friends extends React.Component {
  state = {
    friends: [ // Пример данных о друзьях
      { id: 1, name: 'Иван', surname: 'Петров', imageUrl: 'url1' },
      { id: 2, name: 'Анна', surname: 'Иванова', imageUrl: 'url2' },
      { id: 3, name: 'Павел', surname: 'Сидоров', imageUrl: 'url3' },
      // Добавьте своих друзей
    ],
    search: '',
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { friends, search } = this.state;

    // Фильтрация друзей на основе поискового запроса
    const filteredFriends = friends.filter(
      (friend) =>
        friend.name.toLowerCase().includes(search.toLowerCase()) ||
        friend.surname.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="friends-container">
        <h2>Поиск друзей</h2>
        <input
          type="text"
          placeholder="Поиск друзей"
          value={search}
          onChange={this.handleSearchChange}
        />
        <div className="friend-list">
          {filteredFriends.map((friend) => (
            <div key={friend.id} className="friend">
              <img src="https://avatars.mds.yandex.net/i?id=0e9567d0e99c7a85cc62f0fc1d3c565708d9ebea-10595433-images-thumbs&n=13" alt={`${friend.name} ${friend.surname}`} />
              <div>
                <p>{friend.name}</p>
                <p>{friend.surname}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Friends;
