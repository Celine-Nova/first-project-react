function Login() {
    return (
        <div className="Login">
            <form>
                <label>
                    Nom :
                    <input type="text" name="name" />
                </label>
                <label>
                    Password :
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </div>


    )
}
export default Login;