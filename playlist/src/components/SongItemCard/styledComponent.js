import styled from 'styled-components'

export const SongItem = styled.li`
  list-style: none;
  padding: 5px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  @media screen and (max-width: 400px) {
    margin-bottom: 5px;
  }
`

export const SongThumbnail = styled.img`
  width: 120px;
  @media screen and (min-width: 576px) {
    width: 200px;
  }
  @media screen and (min-width: 992px) {
    width: 250px;
  }
`
export const SongDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 10px;
  @media screen and (min-width: 992px) {
    padding: 10px 20px;
  }
`

export const NameAndGenre = styled.div``

export const SongName = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 600;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media screen and (min-width: 992px) {
    font-size: 23px;
  }
`
export const SongGenre = styled.p`
  font-size: 15px;
  color: #3b82f6;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`
export const DurationAndRemoveIcon = styled.div`
  display: flex;
  align-items: center;
`
export const SongDuration = styled.p`
  font-size: 15px;
  color: white;
  font-weight: 500;
  padding-right: 15px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media screen and (min-width: 992px) {
    font-size: 22px;
    padding-right: 20px;
  }
`
export const DeleteButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
