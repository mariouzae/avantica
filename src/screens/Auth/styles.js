import * as lib from "../../dependencies";
import colors from "../../layout/colors";

export const Container = lib.styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = lib.styled.Image`
    width: 240px;
    height: 80px;
    margin-bottom: 60px;
`;

export const Button = lib.styled.TouchableOpacity`
    width: 305px;
    height: 45px;
    margin-top: 25px;
    background-color: ${colors.primary};
    border-radius: 15px;
    color: ${colors.white};
    justify-content: center;
    align-items: center;
`;

export const InputWrapper = lib.styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 305px;
    height: 45px;
    padding: 10px;
    border: 1px solid ${colors.primary};
    border-radius: 15px;
    font-size: 16px;
    margin-bottom: 20px;
`;

export const Input = lib.styled.TextInput`
    margin-left: 5px;
    width: 245px;
    font-size: 16px;
    letter-spacing: 0.8px;
`;

export const Text = lib.styled.Text`
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.8px;
    color: ${colors.white};
`;

export const ForgotPassTxt = lib.styled.Text`
    font-size: 14px;
    font-weight: 500;
    margin-left: 55px;
    color: ${colors.lightGray13};
`;

export const ErrorMsg = lib.styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: ${colors.red02};
`;
