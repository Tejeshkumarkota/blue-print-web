import { CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import ImageMapper from "react-image-mapper";
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

const PropertyFloorPlanView = ({ openView }) => {

  // const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [moveMsg, setMoveMsg] = useState("");
  const [hoveredArea, setHoveredArea] = useState(null);

  const load = () => {
    setMsg("Interact with image !");
  };

  // const clicked = (area) => {
  //   setMsg(
  //     `You clicked on ${area.shape} at coords ${JSON.stringify(area.coords)} !`
  //   );
  //   navigate({ 
  //     pathname: "/properties/office-for-rent-in-khalifa-park/97",
  //   });
  // };
  const clickedOutside = (evt:any) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMsg(`You clicked on the image at coords ${JSON.stringify(coords)} !`);
  };
  const moveOnImage = (evt:any) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)} !`);
  };
  const enterArea = (area:any) => {
    setMsg(
      `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
    setHoveredArea(area);
  };
  const leaveArea = (area:any) => {
    setMsg(
      `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
    setHoveredArea(null);
  };
  const moveOnArea = (area:any, evt:any) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(
      `You moved on ${area.shape} ${area.name} at coords ${JSON.stringify(
        coords
      )} !`
    );
  };
  const getTipPosition = (area:any) => {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };

  const URL = "/images/floor-plan.png";
  const MAP = {
    name: "my-map",
    areas: [
      {
        name: "jebel ali AD",
        shape: "poly",
        coords: [1565, 1050, 1563, 1086, 1784, 1098, 1789, 1060, 1567, 1050],
        preFillColor: "#00aef5",
      },
      {
        name: "Zaabeel Hall 4",
        shape: "poly",
        coords: [1990, 933, 2180, 941, 2172, 1072, 1982, 1062, 1990, 933],
        preFillColor: "#00ac70",
      },
      {
        name: "Zaabeel Hall 5",
        shape: "poly",
        coords: [1694, 918, 1684, 1053, 1980, 1067, 1988, 931, 1694, 919],
        preFillColor: "#7bc35f",
      },
      {
        name: "Zaabeel Hall 6",
        shape: "poly",
        coords: [1488, 908, 1478, 1044, 1681, 1051, 1691, 918, 1488, 908],
        preFillColor: "#84dc3f",
      },
      {
        name: "Zaabeel Hall 1",
        shape: "poly",
        coords: [2030, 646, 2022, 774, 2181, 782, 2188, 651, 2030, 646],
        preFillColor: "#ff9447",
      },
      {
        name: "Zaabeel Hall 2",
        shape: "poly",
        coords: [1715, 633, 2025, 644, 2019, 776, 1707, 764, 1712, 632],
        preFillColor: "#ffb548",
      },
      {
        name: "Zaabeel Hall 3",
        shape: "poly",
        coords: [
          1490, 596, 1511, 666, 1504, 753, 1705, 761, 1713, 634, 1689, 561,
          1488, 594,
        ],
        preFillColor: "#ff5956",
      },
      {
        name: "Hall 1",
        shape: "poly",
        coords: [1490, 500, 1515, 587, 1705, 558, 1677, 468, 1487, 498],
        preFillColor: "#ff474d",
      },
      {
        name: "Hall 2",
        shape: "poly",
        coords: [1279, 531, 1304, 620, 1515, 586, 1487, 497, 1279, 530],
        preFillColor: "#bb3996",
      },
      {
        name: "Hall 3",
        shape: "poly",
        coords: [1068, 565, 1095, 652, 1302, 620, 1274, 530, 1068, 564],
        preFillColor: "#704097",
      },
      {
        name: "Hall 4",
        shape: "poly",
        coords: [896, 685, 870, 594, 1065, 566, 1092, 653, 896, 683],
        preFillColor: "#2a4f9d",
      },
      {
        name: "Hall 5",
        shape: "poly",
        coords: [
          694, 672, 866, 645, 884, 706, 772, 722, 768, 706, 714, 714, 712, 722,
          695, 674,
        ],
        preFillColor: "#a147be",
      },
      {
        name: "Hall 6",
        shape: "poly",
        coords: [774, 725, 884, 708, 927, 843, 814, 864, 774, 724],
        preFillColor: "#ff59e8",
      },
      {
        name: "Hall 7",
        shape: "poly",
        coords: [815, 866, 926, 848, 968, 985, 854, 1005, 814, 865],
        preFillColor: "#00ba9b",
      },
      {
        name: "Hall 8",
        shape: "poly",
        coords: [855, 1007, 968, 989, 998, 1080, 885, 1099, 856, 1006],
        preFillColor: "#54b632",
      },
      {
        name: "al multaquva ballroom",
        shape: "poly",
        coords: [723, 616, 735, 663, 878, 641, 867, 596, 721, 618],
        preFillColor: "#d24664",
      },
      {
        name: "al ain a-k",
        shape: "poly",
        coords: [858, 536, 870, 574, 1273, 510, 1264, 474, 858, 537],
        preFillColor: "#00a7f6",
      },
      {
        name: "Hatta a-k",
        shape: "poly",
        coords: [1266, 472, 1278, 510, 1676, 447, 1665, 410, 1268, 472],
        preFillColor: "#00a7f6",
      },
      {
        name: "Trade centre arena",
        shape: "poly",
        coords: [1328, 278, 1374, 422, 1648, 378, 1602, 236, 1330, 280],
        preFillColor: "#0072e3",
      },
      {
        name: "Sheikh Saeed Hall 1",
        shape: "poly",
        coords: [990, 333, 1032, 476, 1370, 420, 1327, 282, 990, 335],
        preFillColor: "#7553fd",
      },
      {
        name: "Sheikh Saeed Hall 2",
        shape: "poly",
        coords: [830, 358, 985, 332, 1029, 476, 874, 500, 830, 356],
        preFillColor: "#00a7a7",
      },
      {
        name: "Sheikh Saeed Hall 3",
        shape: "poly",
        coords: [688, 379, 826, 358, 867, 498, 730, 518, 687, 378],
        preFillColor: "#9d46b9",
      },
      {
        name: "The Pavilan",
        shape: "poly",
        coords: [
          918, 806, 1002, 791, 1071, 1021, 1070, 1046, 994, 1060, 986, 1034,
          919, 806,
        ],
        preFillColor: "#ff6447",
        title: "The Pavilon",
      },
      {
        name: "Fuzairah AC",
        shape: "poly",
        coords: [
          795, 997, 848, 988, 881, 1102, 866, 1104, 866, 1110, 830, 1116, 794,
          996,
        ],
        preFillColor: "#00a7f1",
      },
      {
        name: "Ajman AD",
        shape: "poly",
        coords: [752, 855, 807, 846, 848, 985, 792, 994, 753, 855],
        preFillColor: "#00a7f1",
      },
      {
        name: "Sharjah AD",
        shape: "poly",
        coords: [713, 716, 765, 706, 805, 842, 750, 850, 712, 717],
        preFillColor: "#00a7f1",
      },
      {
        name: "Umm AL Qwan",
        shape: "poly",
        coords: [480, 458, 534, 480, 553, 510, 571, 584, 519, 592, 480, 460],
        preFillColor: "#009fea",
      },
      {
        name: "Abu Dhabi A-B",
        shape: "poly",
        coords: [
          488, 588, 492, 607, 493, 624, 520, 717, 574, 710, 556, 646, 547, 623,
          541, 609, 518, 610, 512, 590, 486, 588,
        ],
        preFillColor: "#009fea",
      },
      {
        name: "DUBAI A-F",
        shape: "poly",
        coords: [534, 726, 580, 719, 660, 1002, 612, 1008, 534, 724],
        preFillColor: "#009fea",
      },
      {
        name: "Sheikh Rashid Hall",
        shape: "poly",
        coords: [350, 773, 533, 746, 613, 1030, 429, 1060, 350, 774],
        preFillColor: "#f1aa4b",
      },
      {
        name: "Sheikh Maktoum Hall",
        shape: "poly",
        coords: [
          431, 1060, 661, 1024, 705, 1177, 628, 1190, 614, 1144, 480, 1168, 480,
          1214, 474, 1214, 429, 1058,
        ],
        preFillColor: "#fa8649",
      },
    ],
  };

  return (
    <>
      <Grid
        className="floorplan-toggle-container"
        position="relative"
        width={"100%"}
      >
        <GridItem>
          <Box
            className="close-map-container"
            as="span"
            onClick={() => openView("list")}
          >
            <CloseIcon boxSize={3} />
          </Box>
          <Card borderRadius="10px" boxShadow="2px 2px 3px 2px #00000040">
            <CardBody>
              
              <Box className="container">
                <ImageMapper
                  src={URL}
                  map={MAP}
                  width={1090}
                  onLoad={() => load()}
                  // onClick={(area) => clicked(area)}
                  onMouseEnter={(area:any) => enterArea(area)}
                  onMouseLeave={(area:any) => leaveArea(area)}
                  onMouseMove={(area:any, _:any, evt:any) => moveOnArea(area, evt)}
                  onImageClick={(evt:any) => clickedOutside(evt)}
                  onImageMouseMove={(evt:any) => moveOnImage(evt)}
                />
                {hoveredArea && (
                  <Text
                    as="span"
                    className="tooltip"
                    style={{ ...getTipPosition(hoveredArea) }}
                  >
                    {hoveredArea && hoveredArea.name}
                  </Text>
                )}
              </Box>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
};

export default PropertyFloorPlanView;
