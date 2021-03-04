import styled from 'styled-components/native';
import {Button, Input, Text, Card} from '@ui-kitten/components';
import {View} from 'react-native';

export const Container = styled.View`
  padding: 15px;
`;

export const InputField = styled(Input)`
  width: auto;
  margin: 0;
  width: 85%;
  background-color: transparent;
  margin-top: 3px;
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
  margin-left: 15px;
`;

export const ViewFlex = styled(View)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 80px;
  margin-bottom: -20px;
`;

export const TextView = styled(Text)`
  font-size: 23px;
  font-weight: 200;
  font-family: sans-serif;
  margin-top: 15px;
  text-align: left;
`;

export const OngCardItem = styled(Text)`
  width: 256px;
  margin: 16px 16px;
  margin-left: 0px;
  height: 160px;
  align-items: center;
  justify-content: center;
  background-color: #c4c4c4;
  border-radius: 8px;
  color: #ffffff;
  padding: 24px;
  font-size: 13px;
  font-weight: 700;
`;

export const ListCardItem = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
  flex-wrap: wrap;
`;

export const CardItem = styled(Card)`
  width: 163px;
  height: 168px;
  background: #c4c4c4;
  border-radius: 9px;
  margin: 8px 0px;
`;
