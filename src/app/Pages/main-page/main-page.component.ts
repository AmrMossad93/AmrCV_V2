import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProgrammingSkillsService} from '../../Services/programming-skills.service';
import {IProgrammingSkills} from '../../Models/Interface/programming-skills';
import {ExperienceService} from '../../Services/experience.service';
import {IExperience} from '../../Models/Interface/experience';
import {EducationService} from '../../Services/education.service';
import {IEducation} from '../../Models/Interface/education';
import {CertificationService} from '../../Services/certification.service';
import {ICertification} from '../../Models/Interface/certification';
import {ServiceDetailsService} from '../../Services/service-details.service';
import {IServiceDetails} from '../../Models/Interface/service-details';
import {ClientService} from '../../Services/client.service';
import {IClient} from '../../Models/Interface/client';
import {ProjectsService} from '../../Services/projects.service';
import {IProject} from '../../Models/Interface/project';

declare let $: any;

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {
    programmingSkills: IProgrammingSkills[];
    experiences: IExperience[];
    educations: IEducation[];
    certification: ICertification[];
    serviceDetails: IServiceDetails[];
    client: IClient[];
    projects: IProject[];
    private jQuery: any;

    constructor(
        private programmingSkillsService: ProgrammingSkillsService,
        private certificationService: CertificationService,
        private experienceService: ExperienceService,
        private educationService: EducationService,
        private clientsService: ClientService,
        private projectsService: ProjectsService,
        private serviceDetailsService: ServiceDetailsService
    ) {
    }

    ngOnInit(): void {
        this.getProgrammingSkillsDetails();
        this.getAllExperience();
        this.getAllEducations();
        this.getCertifications();
        this.getMyServices();
        this.getMyClients();
        this.getMyProjects();
    }

    ngAfterViewInit() {
        (function ($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li').on('click', function (g) {
                var tab = $(this).closest('.tab'),
                    index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
                tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(this.jQuery);
    }

    getProgrammingSkillsDetails() {
        this.programmingSkillsService.getProgrammingSkills().subscribe(res => {
            this.programmingSkills = res as IProgrammingSkills[];
        });
    }

    getAllExperience() {
        this.experienceService.getExperienceJobs().subscribe(res => {
            this.experiences = res as IExperience[];
        });
    }

    getAllEducations() {
        this.educationService.getEducationDetails().subscribe(res => {
            this.educations = res as IEducation[];
        });
    }

    getCertifications() {
        this.certificationService.getAllCertifications().subscribe(res => {
            this.certification = res as ICertification[];
        });
    }

    getMyServices() {
        this.serviceDetailsService.getServiceDetails().subscribe(res => {
            this.serviceDetails = res as IServiceDetails[];
        });
    }

    getMyClients() {
        this.clientsService.getClients().subscribe(res => {
            this.client = res as IClient[];
        });
    }

    getMyProjects() {
        this.projectsService.getProjects().subscribe(res => {
            this.projects = res as IProject[];
        });
    }

    getJS(): void {
        $.getScript('../assets/js/main.js');
    }
}
