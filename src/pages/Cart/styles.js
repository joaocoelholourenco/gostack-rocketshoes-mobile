import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;

`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductDelete = styled.TouchableOpacity`
 padding: 6px;
`;

export const ProductControls = styled.View`
background-color: #eee;
align-items: center;
flex-direction: row;
padding: 8px;
border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  flex: 1;
  text-align: right;
`;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 5px;
  min-width: 52px;
  padding: 5px;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const TotalText = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #999;
  font-weight:bold;
  `

export const TotalAmount = styled.Text`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const OrderButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #7159c1;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const OrderText = styled.Text`
color: #fff;
font-weight: bold;
font-size: 16px;
`;
