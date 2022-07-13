import { createContext, useState, useContext } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [currentContent, setCurrentContent] = useState([]);

  const getCurrentContent = (content) => {
    setCurrentContent(content);
  };

  return (
    <ContentContext.Provider
      value={{
        currentContent,
        getCurrentContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContentInfo = () => useContext(ContentContext);
