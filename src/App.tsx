import { lazy, Suspense, useCallback } from "react";
import "./App.css";
import { LoadingProvider, useLoading } from "./context/LoadingProvider";
import CharacterErrorBoundary from "./components/CharacterErrorBoundary";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const AppInner = () => {
  const { setIsLoading } = useLoading();

  const handleCharacterError = useCallback(() => {
    // Apply CSS class that bypasses GSAP ScrollSmoother's overflow clipping
    // so all content remains accessible via native browser scroll.
    document.body.classList.add("no-webgl");
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <Suspense>
      <MainContainer>
        <CharacterErrorBoundary onError={handleCharacterError}>
          <Suspense>
            <CharacterModel />
          </Suspense>
        </CharacterErrorBoundary>
      </MainContainer>
    </Suspense>
  );
};

const App = () => {
  return (
    <LoadingProvider>
      <AppInner />
    </LoadingProvider>
  );
};

export default App;
