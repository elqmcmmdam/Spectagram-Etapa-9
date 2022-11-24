fetchUser = () => {
    let theme;
    firebase
    .database()
    .ref("/users/" + firebase.auth().currentUser.uid)
    .on("value", (snapshot) => {
        theme = snapshot.val().currentTheme
        this.setState({ light_theme: theme === "light" })
    })
}