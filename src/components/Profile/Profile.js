import "./Profile.css";

function Profile({handleLogout}) {
  return (
    <section className="profile">
      
        <h1 className="profile__title">Привет, Александр!</h1>
        <div className="profile__container">
          <p className="profile__name">Имя</p>
          <p className="profile__name">Александр</p>
        </div>
        <div className="profile__container">
          <p className="profile__email">E-mail</p>
          <p className="profile__email">pochta@yandex.ru</p>
        </div>
        <button className="profile__btn">Редактировать</button>
        <button className="profile__btn profile__btn_logout" onClick={handleLogout}>
          Выйти из аккаунта
        </button>
      
    </section>
  );
}

export default Profile;
