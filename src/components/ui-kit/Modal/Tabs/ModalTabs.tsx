import React, { FC, useState } from 'react';
import Icon from '../../Icon';
import { ModalTabsProps } from './types';
import * as Styles from './styles';

const ModalTabs: FC<ModalTabsProps> = ({ data = [], renderContent, renderFilters, actions }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);

  return (
    <Styles.ModalTabsContainer>
      <Styles.ModalTabsHeader>
        {!!data && (
          <Styles.ModalTabsList>
            {data.map(({ title }, index) => (
              <Styles.StyledPillTab
                key={`pill-${title}`}
                active={activeTab === index}
                size="medium"
                oval
                onClick={() => setActiveTab(index)}
              >
                {title}
              </Styles.StyledPillTab>
            ))}
          </Styles.ModalTabsList>
        )}
        <Styles.ModalTabsActions>{actions}</Styles.ModalTabsActions>
      </Styles.ModalTabsHeader>
      <Styles.ModalTabsContent>
        {data?.map(
          ({ title, content }, index) =>
            renderContent &&
            activeTab === index && (
              <Styles.ModalTabsContentContainer key={`content-${title}`}>
                {renderContent(content)}
              </Styles.ModalTabsContentContainer>
            )
        )}

        <Styles.ModalTabsFilters isOpen={isOpenFilters}>
          <Styles.ModalTabsFiltersButton
            isOpen={isOpenFilters}
            onClick={() => setIsOpenFilters((prev) => !prev)}
          >
            <Icon type="chevronDown" />
          </Styles.ModalTabsFiltersButton>
          {data?.map(
            ({ title, filters }, index) =>
              renderFilters &&
              activeTab === index &&
              isOpenFilters && (
                <Styles.ModalTabsFiltersContainer key={`filter-${title}`}>
                  {renderFilters(filters)}
                </Styles.ModalTabsFiltersContainer>
              )
          )}
        </Styles.ModalTabsFilters>
      </Styles.ModalTabsContent>
    </Styles.ModalTabsContainer>
  );
};

export default ModalTabs;
