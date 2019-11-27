import React from "react";
import ContentInnerDesktop from "./desktop";
import ContentInnerMobile from "./mobile";

import VersionProps from "./types";

import SiteVersions from "./types/versions";

export interface ContentInneProps {
  version: SiteVersions;
}

const ContentInner: React.FC = ({
  version = "mobile",
  children,
  id,
  shmid,
  className,
  withMobileMaxWidth
}: VersionProps & ContentInneProps) => {
  const props = { children, id, shmid, className, withMobileMaxWidth };

  if (version === "mobile") return <ContentInnerMobile {...props} />;

  return <ContentInnerDesktop {...props} />;
};

export default ContentInner;
