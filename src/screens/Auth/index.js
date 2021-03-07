import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RN } from "../../components";
import Icon from "react-native-vector-icons/MaterialIcons";
import LogoImg from "../../assets/images/logo.png";
import * as actions from "../../store/actions";
import {
  Container,
  Logo,
  InputWrapper,
  Input,
  Button,
  Text,
  ForgotPassTxt,
  ErrorMsg,
} from "./styles";

export default function Auth(props) {
  const dispatch = useDispatch();

  // STATES
  const [visibility, setVisibility] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // SELECTORS
  const isAuthenticated = useSelector(
    (state) => state && state.auth && state.auth.isAuthenticated
  );
  const loading = useSelector(
    (state) => state && state.auth && state.auth.loading
  );
  const errorMessage = useSelector(
    (state) => state && state.auth && state.auth.errorMessage
  );

  function validateFields(email, password) {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      ) &&
      password
    ) {
      return true;
    }
    return false;
  }

  function handleSignIn() {
    if (validateFields(email, password)) {
      dispatch(actions.authSignIn(email, password));
    } else {
      dispatch(actions.authFail("Invalid email and/or password."));
    }
  }

  function handleVisibility() {
    setVisibility(!visibility);
  }

  

  // EFFECTS
  useEffect(() => {
    const { navigate } = props.navigation;
    if (isAuthenticated) {
      setEmail("");
      setPassword("");
      navigate("Index");
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <Logo source={LogoImg} />
      <InputWrapper>
        <Icon name="person" size={20} />
        <Input
          numberOfLines={1}
          placeholder="Email"
          autoCapitalize="none"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
      </InputWrapper>
      <InputWrapper>
        <Icon name="lock" size={18} />
        <Input
          numberOfLines={1}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={visibility}
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
        <RN.TouchableOpacity onPress={handleVisibility}>
          <Icon name={visibility ? "visibility" : "visibility-off"} size={20} />
        </RN.TouchableOpacity>
      </InputWrapper>
      {errorMessage !== null && <ErrorMsg>{errorMessage}</ErrorMsg>}
      <Button onPress={handleSignIn}>
        {loading ? <RN.ActivityIndicator /> : <Text>Sign In</Text>}
      </Button>
      <RN.TouchableOpacity style={{ alignSelf: "flex-start", marginTop: 10 }}>
        <ForgotPassTxt>forgot password?</ForgotPassTxt>
      </RN.TouchableOpacity>
    </Container>
  );
}
