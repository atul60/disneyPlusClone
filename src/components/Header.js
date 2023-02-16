import { signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState } from "../features/user/userSlice";
import { useEffect } from "react";


const Header = (props) => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const username = localStorage.getItem('displayName');
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                localStorage.setItem('displayName', user.displayName)
                history("/home");
            }
        })
    }, [username]);

    const handleAuth = () => {
        if(!username) {
            provider.setCustomParameters({
                prompt: "select_account"
              });
            signInWithPopup(auth, provider)
            .then((result) => {
                setTimeout(() => setUser(result.user), 5000);
            }).catch((error) => {
                alert(error.message);
            })
        } else if(username) {
            signOut(auth).then(() => {
                dispatch(setSignOutState());
                history("/")
                localStorage.removeItem('displayName')
              }).catch((error) => {
                alert(error.message)
              });
        }
    };

    const setUser = (user) => {
        dispatch(setUserLoginDetails({  
            name: user.displayName,
            email: user.email,
            photo: user.photoURL 
        }));
    }

    return (
        <Nav>
            <Logo>
                <img src='/images/logo.svg' alt='Logo'/>
            </Logo>
            {}
            {
                !username ? (
                <Login onClick={() => handleAuth()}>Login</Login>
                ) : (
                <>
                    <NavMenu>
                        <a href="/home">
                            <img src="/images/home-icon.svg" />
                        <span>HOME</span>
                        </a>
                        <a href="/search">
                            <img src="/images/search-icon.svg" />
                        <span>SEARCH</span>
                        </a>
                        <a href="/home">
                            <img src="/images/watchlist-icon.svg" />
                        <span>WATCHLIST</span>
                        </a>
                        <a href="/home">
                            <img src="/images/movie-icon.svg" />
                        <span>MOVIES</span>
                        </a>
                        <a href="/home">
                            <img src="/images/series-icon.svg" />
                        <span>SERIES</span>
                        </a>
                        <a href="/home">
                            <img src="/images/original-icon.svg" />
                        <span>ORIGINALS</span>
                        </a>
                    </NavMenu>  
                    <SignOut>
                        <UserImg src={userPhoto} alt="USER" />
                        <DropDown>
                            <span onClick={handleAuth}>Sign Out</span>
                        </DropDown>
                    </SignOut>
                </>
                )
            }
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 10px;
`

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        cursor: pointer;
    }
`

const UserImg = styled.img` 
    height: 100%;
`
const DropDown = styled.div`
        display: flex;
        justify-content: end;   
        opacity: 0;
        span {
            width: 50px;
            position: absolute;
            top: 50px; 
            right: 0;
        }
`

const SignOut = styled.div`
        /* top: 17px; */
        position: relative;
        height: 48px;
        width: 48px;
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        ${UserImg} {
            border-radius: 50%;
            width: 100%;
            height: 100%;
        }   
        
        &:hover {
            ${DropDown} {
                opacity: 1;
                transition-duration: 1s;
            }
        }
`


export default Header;