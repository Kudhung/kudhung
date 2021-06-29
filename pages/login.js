import Navbar from "../components/navbar"

const Login = () => (
    <div>
    <Navbar/>
        <link rel="stylesheet" href="/css/login.css" />
        <div class="login_sign_in">
            <div class="form_putih_login">
                <div class="judul_order_sign_in_process">
                    Log In
                </div>
                <form>
                    <table align="center">
                        <tr>
                            <td>Email
                                <tr><input class="input_login" type="email" value="" /></tr></td>
                        </tr>
                        <tr>
                            <td>Password
                                <tr><input class="input_login" type="password" value=""/></tr></td>
                        </tr>
                    </table>
                    <div class="button_login efek_linear">
                        <button>LOG - IN</button>
                    </div>
                    <div class="forgot_password">
                        <a href=".">Forgot Your Password ?</a><br />
                    </div>
                    <div class="css_div2">
                        OR
                        <hr />
                        Don't have an account?
                        <div>
                            <a href="."> Sign In Now </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
)

export default Login