
import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ center: [-85, 12], scale: 1800 }}
      style={{ width: "120%", height: "100%" }}
    >
      <ZoomableGroup >
        <Geographies
          geography="/features.json"
          fill="#065D2C"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
            geographies
              .filter((geo) => ["Nicaragua", "Costa Rica", "Honduras","Panama","Salvador","Belize","Guatemala","Mexico","Colombia"].includes(geo.properties.name))
              .map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
          }
        </Geographies>
        <Annotation
          subject={[-86.2419, 12.1145]}
          dx={-30}
          dy={30}
          connectorProps={{
            stroke: "#FFF",
            strokeWidth: 2,
            strokeLinecap: "round"
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
            {"Desarrollador de Nicaragua"}
          </text>
        </Annotation>
        <Annotation
        subject={[-90.2308, 15.7835]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
          {"Guatemala"}
        </text>
      </Annotation>
      <Annotation
        subject={[-86.2419, 15.199999]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
          {"Honduras"}
        </text>
      </Annotation>
      
      <Annotation
        subject={[-84.0913, 9.9281]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="8" textAnchor="start" alignmentBaseline="middle" fill="#FFF">
          {"Costa Rica"}
        </text>
      </Annotation>

      <Annotation
        subject={[-88.75, 17.1899]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="8" textAnchor="start" alignmentBaseline="middle" fill="#FFF">
          {"Belize"}
        </text>
      </Annotation>

      <Annotation
        subject={[-79.5167, 8.9833]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: "#FFF",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
          {"Panamá"}
        </text>
      </Annotation>

      <Annotation
          subject={[-99.1332, 19.4326]}
          dx={0}
          dy={0}
          connectorProps={{
            stroke: "#FFF",
            strokeWidth: 2,
            strokeLinecap: "round"
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
            {"México"}
          </text>
        </Annotation>

        <Annotation
            subject={[-74.0721, 4.7110]}
            dx={0}
            dy={0}
            connectorProps={{
              stroke: "#FFF",
              strokeWidth: 2,
              strokeLinecap: "round"
            }}
          >
            <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFF">
              {"Colombia"}
            </text>
          </Annotation>


      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
