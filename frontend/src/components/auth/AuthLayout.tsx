import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import AuthContent from './AuthContent'
import '../../assets/css/login.css'

export default function AuthLayout({ activeForm, toggleForm }) {
    return (
        <div id="container" className={`container ${activeForm === 'signin' ? 'sign-in' : 'sign-up'}`}>
            <div className="row">
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center">
                        <SignupForm toggle={toggleForm} />
                    </div>
                </div>

                <div className="col align-items-center flex-col sign-in">
                    <div className="form-wrapper align-items-center">
                        <LoginForm toggle={toggleForm} />
                    </div>
                </div>
            </div>

            <div className="row content-row">
                <AuthContent />
            </div>
        </div>
    )
}
