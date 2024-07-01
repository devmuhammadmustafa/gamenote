const { default: DiscIcon } = require("@/components/Icons/DiscIcon");
const { default: ProcessorIcon } = require("@/components/Icons/ProcessorIcon");
const { default: RamIcon } = require("@/components/Icons/RamIcon");
const { default: ScreenIcon } = require("@/components/Icons/ScreenIcon");
const { default: SystemIcon } = require("@/components/Icons/SystemIcon");
const { default: VideoIcon } = require("@/components/Icons/VideoIcon");

const specificationsIcon = [
  {
    name: "processor",
    icon: <ProcessorIcon />,
  },
  {
    name: "video",
    icon: <VideoIcon />,
  },
  {
    name: "ram",
    icon: <RamIcon />,
  },
  {
    name: "disc",
    icon: <DiscIcon />,
  },
  {
    name: "screen",
    icon: <ScreenIcon />,
  },
  {
    name: "system",
    icon: <SystemIcon />,
  },
];

export default specificationsIcon;
