import {MdDelete} from 'react-icons/md'

import {
  SongItem,
  SongThumbnail,
  SongDetails,
  NameAndGenre,
  SongName,
  SongGenre,
  DurationAndRemoveIcon,
  SongDuration,
  DeleteButtonIcon,
} from './styledComponent'

const SongItemCard = props => {
  const {songItemDetails, onDelete} = props
  const {id, imageUrl, name, genre, duration} = songItemDetails

  const onClickDeleteIcon = () => {
    onDelete(id)
  }

  return (
    <SongItem>
      <SongThumbnail src={imageUrl} alt="track" />
      <SongDetails>
        <NameAndGenre>
          <SongName>{name}</SongName>
          <SongGenre>{genre}</SongGenre>
        </NameAndGenre>
        <DurationAndRemoveIcon>
          <SongDuration>{duration}</SongDuration>
          <DeleteButtonIcon onClick={onClickDeleteIcon} data-testid="delete">
            <MdDelete size="25" color="white" />
          </DeleteButtonIcon>
        </DurationAndRemoveIcon>
      </SongDetails>
    </SongItem>
  )
}

export default SongItemCard
