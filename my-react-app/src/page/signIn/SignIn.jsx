import './SignIn.css'

function SignIn() {
    return (
        <div className='signInContainer'>
            <form action="">
                <h2>Welcome to Omnix</h2>
                <div className='formGroup'>
                    <input type="text" name='email' id='email' placeholder=' 'required />
                    <label htmlFor="email">Email address </label>
                    <p className='error'></p>
                </div>
                <div className='formGroup'>
                    <input type="password" name='password' id='password'placeholder=' ' required />
                    <label htmlFor="password">password</label>
                    <p className='error'></p>
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>

    )
}
export default SignIn