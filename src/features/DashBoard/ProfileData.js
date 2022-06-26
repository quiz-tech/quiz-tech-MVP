import styled from 'styled-components';
import { flex } from '../../styles/Mixin';

const ProfileData = ({ ...profileData }) => {
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
  height: 70px;
  margin: 30px 25px 0 0;
`;

const ProfileDataImgBase = styled.div`
  ${flex('center', 'center')}
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border: 1px solid gray;
  border-radius: 10px;
`;

const ProfileDataImg = styled.img`
  width: 100%;
  height: 100%;
  /* background: url({profileData.dataImg}) no-repeat center; */
`;

const ProfileDataInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
const ProfileDataResult = styled.span`
  font-weight: 700;
  font-size: 25px;
`;
const ProfileDataName = styled.span`
  font-size: 13px;
  margin-top: 5px;
`;
