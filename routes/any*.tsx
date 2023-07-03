import { PageProps } from "$fresh/server.ts";
import { Route, Router } from "react-like-router";
import { Sidebar } from "../components/Sidebar.tsx";

export default function Wildcard(props: PageProps) {
  return (
    <div className="h-screen bg-gray-800 overflow-hidden flex">
      <Sidebar />
      <div className="flex flex-col flex-grow gap-2 justify-center items-center text-white">
        any
        <Router
          url={props.url}
          filePath={import.meta.url}
        >
          <Route path="/thing">
            /thing
            <Router url={props.url}>
              <Route path="/pizza">
                /pizza
              </Route>
            </Router>
          </Route>
          <Route path="/thing-pizza">
            /thing-pizza
          </Route>
          <Route path="/">
            404
          </Route>
        </Router>
      </div>
    </div>
  );
}
