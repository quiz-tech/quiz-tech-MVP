import styled from 'styled-components';

const ProfileData = () => {
  return (
    <Data>
      <ProfileDataImg />
      <ProfileDataInfo>
        <ProfileDataTitle />
        <ProfileDataName />
      </ProfileDataInfo>
    </Data>
  );
};

export default ProfileData;

const Data = styled.li`
  background-color: red;
`;

const ProfileDataImg = styled.div``;
const ProfileDataInfo = styled.div``;
const ProfileDataTitle = styled.div``;
const ProfileDataName = styled.div``;
