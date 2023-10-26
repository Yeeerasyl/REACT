import React from "react";
import "./MyProfile.css"; // Подключите файл стилей

function MyProfile(props) {
  /* const { photo, firstName, lastName, birthDate, city, status, friendsCount, postsCount } = props;
 */

  return (
    <div className="profile-container"> {/* Добавьте контейнер для стилей */}
      <div className="profile-header"> {/* Добавьте заголовок профиля */}
      <img src="https://avatars.mds.yandex.net/i?id=eda580fc206e5b2c2681268b9e9cb61f8afeef3a-9882590-images-thumbs&n=13" alt="Фото профиля" className="profile-photo" />
        <div className="profile-info">
          <h1>Уалихан Ерасыл</h1>
          <p>Дата рождения: 03.04.2003</p>
          <p>Город: Алматы</p>
          <p>Статус: онлайн</p>
          <p>Друзей: 22</p>

        </div>
      </div>
      {/* Дополнительная информация о пользователе (например, дополнительные детали профиля) */}
    </div>
  );
}

export default MyProfile;
