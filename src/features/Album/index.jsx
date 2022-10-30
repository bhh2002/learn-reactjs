import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Phim Việt Nam",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/f/9/f/3f9f8810dd3f650b9feb00bf470032ce.jpg",
    },
    {
      id: 2,
      name: "EDM Việt gây nghiện",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/6/2/4/7624b08c5833ec4978a2c23379776000.jpg",
    },
    {
      id: 3,
      name: "Guitar V-Pop",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/4/1/a/841a4e3fbfd78f89f7b13e9f48737a45.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
