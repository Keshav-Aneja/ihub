import Heading from "../components/Heading";
import { team } from "../data/team";
import TeamCard from "../components/TeamCard";
import Marquee from "react-fast-marquee";
export default function Team() {
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-8">
      <Heading heading="Team" />
      <div className="flex items-center justify-center w-full gap-8">
        {team.map(
          (teamMember, index) =>
            teamMember.type === "core" && (
              <TeamCard
                name={teamMember.name}
                img={teamMember.img}
                key={index}
                designation={teamMember.designation}
                position={teamMember.position}
              />
            )
        )}
      </div>
      <h1 className="text-3xl font-bold text-primary">Design Team</h1>
      <div className="flex items-center  w-full mx-auto overflow-x-hidden gap-8">
        <Marquee>
          {team.map(
            (teamMember, index) =>
              teamMember.type === "design" && (
                <TeamCard
                  name={teamMember.name}
                  img={teamMember.img}
                  key={index}
                  small={true}
                />
              )
          )}
        </Marquee>
      </div>
      <h1 className="text-3xl font-bold text-primary">Animation + VFX</h1>
      <div className="flex items-center  w-full mx-auto overflow-x-hidden gap-8">
        <Marquee>
          {team.map(
            (teamMember, index) =>
              teamMember.type === "animation" && (
                <TeamCard
                  name={teamMember.name}
                  img={teamMember.img}
                  key={index}
                  small={true}
                />
              )
          )}
        </Marquee>
      </div>
      <h1 className="text-3xl font-bold text-primary">Development Team</h1>
      <div className="flex items-center  w-full mx-auto overflow-x-hidden gap-8">
        <Marquee>
          {team.map(
            (teamMember, index) =>
              teamMember.type === "development" && (
                <TeamCard
                  name={teamMember.name}
                  img={teamMember.img}
                  key={index}
                  small={true}
                />
              )
          )}
        </Marquee>
      </div>
    </div>
  );
}
