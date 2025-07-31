import logoImg from '../../assets/images/logo.png'
import ginImg from "../../assets/images/gin.png"

export default function AuthContent() {
    return (
        <>
            <div className="col align-items-center flex-col">
                <div className="logo-container img sign-in">
                    <img src={logoImg} alt="Logo" className="logo-img" />
                </div>
                <div className="title-wrapper text sign-in">
                    <h2 className="hero-title">
                        <span className="highlight">Negro</span>ni...<br />Rating
                    </h2>
                </div>
            </div>

            <div className="col align-items-center flex-col">
                <div className="logo-container img sign-up">
                    <img src={ginImg} alt="Gin" className="logo-img" />
                </div>
                <div className="title-wrapper text sign-up">
                    <h2 className="hero-title sign-up">Crea le tue classifiche!</h2>
                </div>
            </div>
        </>
    )
}
