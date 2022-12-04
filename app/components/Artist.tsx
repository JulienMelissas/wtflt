export interface ArtistProps {
  name: string,
  url: string,
}

export const Artist = ({ name, url }: ArtistProps) => (
  <a className="artist h1" href={url} target="_blank" rel="noreferrer">{name}</a>
);