import styled from "@emotion/styled";

export const Card = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin-bottom: 2.5rem;
  overflow: hidden;
  border: 1px solid #e8eaf0;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 8px 28px rgba(25, 32, 56, 0.05);
  @media (min-width: 992px) {
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  }
`;

export const CardLeft = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f6fa;
  img { width: 100%; height: 100%; object-fit: cover; }
  &.brand-panel {
    padding: 2.5rem;
    min-height: 240px;
    background: #fff;
    border-bottom: 1px solid #edf0f4;
    img { height: auto; max-height: 190px; object-fit: contain; }
  }
  @media (min-width: 992px) {
    &.brand-panel { border-bottom: 0; border-right: 1px solid #edf0f4; }
  }
`;

export const CardRight = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  .project-category {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: #667085;
    margin-bottom: 0.6rem;
  }
  h4 { font-size: 1.45rem; font-weight: 500; color: #182230; line-height: 1.35; }
  p { font-size: 14px; line-height: 1.8; color: #586174; margin: 0.8rem 0 1.2rem; }
  @media (max-width: 575px) { padding: 1.5rem; }
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
  a { font-size: 13px; margin-right: 0; }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const TechCard = styled.span`
  border: 1px solid #e6eaf0;
  border-radius: 6px;
  background: #f8f9fc;
  padding: 4px 9px;
  font-size: 12px;
  font-weight: 400;
  color: #475467;
`;
