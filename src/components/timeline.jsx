import React from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function DefaultTimeline() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Feb 2022</Timeline.Time>
          <Timeline.Title className="text-white">
            Freelancer Game Designer
          </Timeline.Title>
          <Timeline.Body>
            <p>
              As a freelance game developer, I created captivating mobile games
              using the Unity engine, delivering immersive experiences and
              engaging gameplay to users.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>July 2022</Timeline.Time>
          <Timeline.Title className="text-white">
            Core Member of GDSC
          </Timeline.Title>
          <Timeline.Body>
            <p>
              As a Core Team Member of the Google Developer Student Club at
              PHCET, I utilize my graphic design skills to create visually
              appealing designs and organize coding events to foster a
              collaborative and engaging learning environment for fellow
              students.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>March 2023</Timeline.Time>
          <Timeline.Title className="text-white">
            The Food Bridge (Google Solution Challenge)
          </Timeline.Title>
          <Timeline.Body>
            <p>
              A Firebase-based website combating food waste through surplus food
              donation and youth volunteer engagement. It promotes
              sustainability in catering services, hotels, and marriages.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>May 2023</Timeline.Time>
          <Timeline.Title className="text-white">
            InsureTech Financial Services (Currently)
          </Timeline.Title>
          <Timeline.Body>
            <p>
              Currently interning at InsureTech Financial Services, actively
              involved in developing full-stack websites and contributing to the
              company's web development projects.
            </p>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
