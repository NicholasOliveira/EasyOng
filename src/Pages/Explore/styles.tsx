import styled from 'styled-components/native';
import {Button, Input, Text} from '@ui-kitten/components';
import {View} from 'react-native';

export const Container = styled.View`
  padding: 16px;
`;

export const InputField = styled(Input)`
  width: auto;
  margin: 0;
  width: 85%;
  background-color: transparent;
  margin-top: 4px;
  border: none;
`;

export const Box = styled.View`
  background-color: transparent;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const BoxButton = styled(Button)`
  background: transparent;
  border: 0;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 120px;
  color: #f04;
  margin: 0;
  border: 1px solid #bababa;
  border-radius: 8px;
  text-align: center;
  margin-left: 16px;
`;

export const ViewFlex = styled(View)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 80px;
  background-color: transparent;
`;

export const TextView = styled(Text)`
  font-size: 24px;
  font-weight: 200;
  font-family: sans-serif;
  margin-top: 16px;
  text-align: left;
`;

export const OngCardItem = styled.TouchableOpacity`
  width: 256px;
  margin: 16px 16px;
  margin-left: 0px;
  min-height: 220px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 8px;
  color: #ffffff;
  padding: 0px;
  font-size: 12px;
  font-weight: 700;
  background-color: transparent;
`;

export const ItemTitle = styled(Text)`
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  margin-bottom: 5px;
`;
export const ItemDescription = styled(Text)`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;

export const ListCardItem = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
  flex-wrap: wrap;
`;

export const ImageUI = styled.Image`
  width: 100%;
  height: 128px;
  background: #c4c4c4;
  border-radius: 8px;
  display: flex;
  margin: 0% 0 4% 0;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardItem = styled.TouchableOpacity`
  width: 48%;
  min-height: 168px;
  border-radius: 8px;
  display: flex;
  margin: 0% 0 6% 0;
  padding: 0px;
  align-items: flex-start;
  justify-content: space-between;
`;
