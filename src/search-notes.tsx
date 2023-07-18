import { ActionPanel, Detail, List, Action } from "@raycast/api";
import { useNotes } from "./hooks";

export default function Command() {
  const { notes } = useNotes();

  return (
    <List>
      {notes &&
        notes?.map((note) => (
          <List.Item
            key={note._id}
            title={note.title}
            subtitle={note.tags.join(", ")}
            actions={
              <ActionPanel>
                <Action.Push title="Show Note" target={<Detail markdown={note.body} />} />
                <Action.OpenInBrowser title="Open in Inkdrop" url={`inkdrop://${note._id}`} />
              </ActionPanel>
            }
          />
        ))}
    </List>
  );
}
