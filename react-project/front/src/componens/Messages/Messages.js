import React from 'react';
import './Messages.css'
class Messages extends React.Component {
  state = {
    chats: [ // Пример данных о чатах
      { id: 1, name: 'Чат 1' },
      { id: 2, name: 'Чат 2' },
      { id: 3, name: 'Чат 3' },
      // Добавьте свои чаты
    ],
    search: '',
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { chats, search } = this.state;

    // Фильтрация чатов на основе поискового запроса
    const filteredChats = chats.filter(
      (chat) =>
        chat.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="messages-container">
        <h2>Поиск людей для нового чата</h2>
        <input
          type="text"
          placeholder="Поиск друзей для нового чата"
          value={search}
          onChange={this.handleSearchChange}
        />
        <div className="chat-list">
          {filteredChats.map((chat) => (
            <div key={chat.id} className="chat">
              <p>{chat.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Messages;
