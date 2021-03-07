import * as lib from "../../dependencies";
import colors from "../../layout/colors";

export const Container = lib.styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.white02};
`;

export const Header = lib.styled.View`
    width: 100%;
    height: 100px;
    justify-content: center;
    padding: 10px;
    background: ${colors.white02};
    z-index: 99;
`;

export const Row = lib.styled.View`
    flex-direction: row;
`;

export const Column = lib.styled.View`
    padding: 10px;
    flex-direction: column;
    justify-content: center;
`;

export const Avatar = lib.styled.Image`
    width: 70px;
    height: 70px;
`;

export const Separator = lib.styled.View`
    border: 0.5px solid ${colors.lightGray08};
`;

export const Text = lib.styled.Text`
    font-size: ${(props) => (props.size ? props.size : 14)}px;
    opacity: ${(props) => (props.opacity ? props.opacity : 1)};
    color: ${colors.darkGray01};
    font-weight: ${(props) => (props.bold ? 700 : 400)};
`;
