import { LogoutButton } from "@/features/auth/ui/logout-button";
import { CenteredContainer } from "@/shared/components/atoms/container/container";
import { Flex } from "@/shared/components/atoms/display/flex/flex";
import { Paragraph } from "@/shared/components/atoms/typography/paragraph/paragraph";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(authenticated)/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <CenteredContainer size="full" style={{ height: "100vh" }}>
      <Flex direction="column">
        <Paragraph>Welcome to your Dashboard!</Paragraph>
        <LogoutButton />
      </Flex>
    </CenteredContainer>
  );
}
