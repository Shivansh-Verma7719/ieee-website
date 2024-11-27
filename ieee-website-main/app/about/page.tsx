import React from "react";
import { getPhotosServer } from "./actions";
import AboutWrapper from "./aboutWrapper";

export default async function AboutPage() {
  const photos = await getPhotosServer();

  return <AboutWrapper photos={photos} />;
}
