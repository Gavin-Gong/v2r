import styled from 'styled-components'

const bgUrl = 'http://opazkqh2d.bkt.clouddn.com/17-5-22/66835913-file_1495435088121_add3.jpg'

const  Login = styled.div`
  font-size: 1.2rem;
  color: #f44336;
  display: block;
  margin: 0;
  padding: 0;
`

const View = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backgroud: #eee  center center / cover no-repeat;
  background-image: url(${bgUrl});
`
const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  border-radius: 3px;
  background: #fff;
  padding: 20px;
`

const Avatar = styled.div`
  border-radius: 50%;
`

const Input = styled.input`
  font-size: 12px;
  display: block;
  &:first-child {
    margin-bottom: 30px;
  }
`

const Button = styled.button`
  text-align: center;
`

export {
  View,
  Avatar,
  Login,
  Card,
  Input,
  Button
} 