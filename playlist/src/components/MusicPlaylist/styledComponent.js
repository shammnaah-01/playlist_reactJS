import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #152850;
`

export const BannerContainer = styled.div`
  height: 150px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (min-width: 576px) {
    height: 250px;
  }
  @media screen and (min-width: 768px) {
    height: 300px;
  }
  @media screen and (min-width: 992px) {
    height: 350px;
  }
  @media screen and (min-width: 1200px) {
    height: 380px;
  }
`
export const SingerName = styled.h1`
  font-size: 25px;
  margin: 0px;
  color: white;
  margin-left: 20px;
  @media screen and (min-width: 576px) {
    font-size: 35px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-left: 40px;
  }
  @media screen and (min-width: 992px) {
    font-size: 50px;
  }
  @media screen and (min-width: 1200px) {
    height: 70px;
    margin-left: 50px;
  }
`

export const SingerText = styled.p`
  font-size: 15px;
  color: white;
  font-weight: 400;
  margin-top: 10px;
  margin-left: 20px;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-left: 40px;
  }
  @media screen and (min-width: 992px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1200px) {
    height: 35px;
    margin-left: 50px;
  }
`

export const HeadingAndSearchContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  margin: 20px 30px;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
  }
`

export const SongsPlaylistHeading = styled.h1`
  font-size: 25px;
  color: white;
  margin-bottom: 0px;
  @media screen and (min-width: 576px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 992px) {
    font-size: 30px;
    margin-left: 12px;
  }
`

export const SearchContainer = styled.div`
  background-color: transparent;
  border: 2px solid White;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  width: 100%;
  max-width: 320px;
`

export const SearchInput = styled.input`
  background-color: transparent;
  padding: 15px;
  border: none;
  outline: none;
  color: white;
  width: 100%;
`

export const PlaylistContainer = styled.div`
  margin: 0px;
  padding: 20px;
  padding-top: 0px;
  @media screen and (min-width: 768px) {
    padding: 40px;
    padding-top: 0px;
  }
`
export const Playlist = styled.ul`
  margin-top: 0px;
  padding: 10px;
  height: 450px;
  overflow-y: auto;
  background-color: #153550;
  border-radius: 5px;
  border-top-left-radius: 35px;
  @media screen and (min-width: 576px) {
    border-top-left-radius: 50px;
    padding: 20px;
  }
`

export const NoItemFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`

export const NoItemFound = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: white;
`
