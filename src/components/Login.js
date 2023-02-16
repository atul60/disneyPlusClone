import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt=''/>
                    <SignUp>Get All These</SignUp>
                    <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ Subscription. As of 24/01/2023, the price of Disney+ and The Disney Bundle will increase by 1$.</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
                </CTA>
                <BgImg />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    align-items: center;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

const BgImg = styled.div`
    background-image: url('/images/login-background.jpg');
    height: 100%;
    z-index: -1;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-repeat: no-repeat;
`

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    width: 100%;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    border-radius: 4px;
    padding: 16.5px 0;
    font-size: 18px;
    border: 1px solid transparent;

    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }
`

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
    max-width: 600px;
    width: 100%;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
`



export default Login;