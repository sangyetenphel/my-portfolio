import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { routerFuture } from './routerFuture';
import { projectsData } from './components/portfolio/Data';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]} future={routerFuture}>
      <App />
    </MemoryRouter>
  );

test('home page shows the main sections', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1, name: /sangye tengkhar/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Qualifications' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
});

test('projects slider shows the four projects, newest first, without filters', () => {
  renderAt('/');
  const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
  const expected = [...projectsData].reverse().map((project) => project.title);
  expect(projectsData).toHaveLength(4);
  expect(titles).toEqual(expect.arrayContaining(expected));
  expect(titles.indexOf(expected[0])).toBeLessThan(titles.indexOf(expected[3]));
  expect(screen.queryByText('mobile')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Previous project' })).toBeDisabled();
  expect(screen.getByRole('button', { name: 'Next project' })).toBeInTheDocument();
});

test('project page shows the project details', () => {
  const project = projectsData[0];
  renderAt(`/project/${project.id}`);
  expect(screen.getByText(project.project_overview)).toBeInTheDocument();
});

test('unknown project id shows a not found message instead of crashing', () => {
  renderAt('/project/9999');
  expect(screen.getByText('Project not found')).toBeInTheDocument();
});

test('footer links to LinkedIn, GitHub and email', () => {
  renderAt('/');
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/sangyetenphel');
  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/sangyetenphel');
  expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', 'mailto:sangyetengkhar@gmail.com');
});

test('sections appear in order with Skills last', () => {
  const { container } = renderAt('/');
  const ids = [...container.querySelectorAll('main > section')].map((section) => section.id);
  expect(ids).toEqual(['home', 'qualifications', 'projects', 'skills']);
});

test('qualifications timeline switches between education and experience', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { name: 'Google IT Support Certificate' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Data Systems Analyst Intern' })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /experience/i }));
  expect(screen.getByRole('heading', { name: 'Data Systems Analyst Intern' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Google IT Support Certificate' })).not.toBeInTheDocument();
});
