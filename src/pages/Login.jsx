
// pages/Login.jsx
import '../CSS/login.css';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/authSlice";
import { useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from '../firebase';
import {getUserRole} from "../utiles/getUserRole";
import { getIdFromToken } from '../utiles/getIdFromToken';
import axios from 'axios';
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isLoggedIn,token } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [socialLoading, setSocialLoading] = useState({ google: false, facebook: false });

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  const handelGetType =async(id)=>{
    try{
        const response = await axios.get(`http://localhost:3000/api/studentType`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return(response.data.studentType);
        }
    catch(error){
      console.error("Error fetching user type:", error);
      return null;
    }
  }

  // Redirect to home after login
  useEffect(() => {
    if (isLoggedIn) {
      const role = getUserRole(token);
      // alert(role);
      if (role === "student") {
        //  must know if its a university or school student
       const id = getIdFromToken(token);
      //  alert(id);
        handelGetType(id).then((type)=>{
          if(type==="university"){
            alert(type);
            navigate("/home/university");
          }else if(type==="school"){
           alert("school student");
            navigate("/home");
          }
        // alert(type)
        });
      } else if (role === "teacher") {
        navigate("/home/teacher");
      } else if(role==="parent"){
        navigate("/home");
      }else if(role==="trainee"){
        navigate("/home/tranier");
      }
      
      //navigate('/student/home');
    }
  }, [isLoggedIn, navigate]);

  // Handle redirect result after Facebook login
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const user = result.user;
          console.log('Facebook redirect user:', user);
          navigate("/home");
        }
      } catch (error) {
        console.error('Redirect result error:', error);
      }
    };

    handleRedirectResult();
  }, [navigate]);

  // Google Login with Firebase
  const handleGoogleLogin = async () => {
    try {
      setSocialLoading(prev => ({ ...prev, google: true }));
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      console.log('Google user:', user);
      navigate("/home");
      //navigate('/student/home');
    } catch (error) {
      console.error('Google login error:', error);
      // تجاهل أخطاء الإلغاء
      if (error.code !== 'auth/cancelled-popup-request' && 
          error.code !== 'auth/popup-closed-by-user') {
        alert(`Google login failed: ${error.message}`);
      }
    } finally {
      setSocialLoading(prev => ({ ...prev, google: false }));
    }
  };

  // Facebook Login with Firebase - محسن
  const handleFacebookLogin = async () => {
    try {
      setSocialLoading(prev => ({ ...prev, facebook: true }));
      
      // إعدادات إضافية لـ Facebook
      facebookProvider.addScope('email');
      facebookProvider.addScope('public_profile');
      facebookProvider.setCustomParameters({
        'display': 'popup'
      });

      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      
      console.log('Facebook user:', user);
      navigate("/home");
      
    } catch (error) {
      console.error('Facebook login error:', error);
      
      // معالجة أنواع الأخطاء المختلفة
      switch (error.code) {
        case 'auth/cancelled-popup-request':
        case 'auth/popup-closed-by-user':
          // تجاهل - المستخدم ألغى العملية
          console.log('User cancelled Facebook login');
          break;
          
        case 'auth/account-exists-with-different-credential':
          alert('هذا البريد الإلكتروني مسجل مسبقاً بطريقة تسجيل دخول أخرى');
          break;
          
        case 'auth/popup-blocked':
          alert('تم حظر نافذة التسجيل. الرجاء السماح بالنوافذ المنبثقة لهذا الموقع');
          break;
          
        case 'auth/unauthorized-domain':
          alert('هذا النطاق غير مصرح به. الرجاء التحقق من إعدادات Firebase');
          break;
          
        case 'auth/operation-not-allowed':
          alert('تسجيل الدخول عبر Facebook غير مفعل في إعدادات Firebase');
          break;
          
        default:
          if (error.message.includes('Facebook')) {
            alert(`Facebook login failed: ${error.message}`);
          }
      }
    } finally {
      setSocialLoading(prev => ({ ...prev, facebook: false }));
    }
  };

  // بديل: استخدام Redirect بدلاً من Popup (أكثر موثوقية)
  const handleFacebookLoginRedirect = async () => {
    try {
      setSocialLoading(prev => ({ ...prev, facebook: true }));
      
      facebookProvider.addScope('email');
      facebookProvider.addScope('public_profile');
      
      await signInWithRedirect(auth, facebookProvider);
      
    } catch (error) {
      console.error('Facebook redirect error:', error);
      setSocialLoading(prev => ({ ...prev, facebook: false }));
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log In to your account</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>

        {error && <p className="error-text">{error}</p>}

        {/* Social Login Section */}
        <div className="social-login">
          <p className="social-text">or login with</p>
          <div className="social-buttons">
            <button 
              className="social-btn facebook-btn"
              onClick={handleFacebookLogin}
              disabled={socialLoading.facebook}
            >
              {socialLoading.facebook ? (
                <div className="button-loading">
                  <div className="spinner-small"></div>
                  Loading...
                </div>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#4267B2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </>
              )}
            </button>
            <button 
              className="social-btn google-btn"
              onClick={handleGoogleLogin}
              disabled={socialLoading.google}
            >
              {socialLoading.google ? (
                <div className="button-loading">
                  <div className="spinner-small"></div>
                  Loading...
                </div>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </>
              )}
            </button>
          </div>
        </div>

        {/* Sign Up Section */}
        <div className="signup-section">
          <p>Don't have account? <span className="signup-link" onClick={() => navigate("/signup")}>Sign Up</span></p>
        </div>
      </div>
    </div>
  );
}