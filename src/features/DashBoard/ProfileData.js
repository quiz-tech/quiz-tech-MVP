import styled from 'styled-components';
import { flex } from '../../styles/Mixin';
import { useSelector } from 'react-redux';

const ProfileData = ({ ...profileData }) => {
  const userData = useSelector(state => state.userData);

  return (
    <Data>
      <ProfileDataImgBase>
        <ProfileDataImg src={profileData.dataImg} alt="프로필데이터사진" />
      </ProfileDataImgBase>
      <ProfileDataInfo>
        <ProfileDataResult>{profileData.dataResult}</ProfileDataResult>
        <ProfileDataName>{profileData.dataName}</ProfileDataName>
      </ProfileDataInfo>
    </Data>
  );
};

export default ProfileData;

const Data = styled.li`
  ${flex('space-between', 'center')}
  height: 80px;
  margin: 25px 50px 0 0;
`;

const ProfileDataImgBase = styled.div`
  ${flex('center', 'center')}
  width: 70px;
  height: 70px;
  background-color: #ffffff;

  border-radius: 10px;
  box-shadow: 5px 5px 5px lightgray;
`;

const ProfileDataImg = styled.img`
  width: 30px;
  height: 30px;
`;

const ProfileDataInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const ProfileDataResult = styled.span`
  font-weight: 700;
  font-size: 28px;
`;

const ProfileDataName = styled.span`
  font-size: 15px;
  margin-top: 5px;
`;
